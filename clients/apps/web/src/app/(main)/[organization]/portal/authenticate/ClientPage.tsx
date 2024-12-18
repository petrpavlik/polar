'use client'

import { useCustomerPortalSessionAuthenticate } from '@/hooks/queries'
import { api } from '@/utils/api'
import { setValidationErrors } from '@/utils/api/errors'
import { Organization, ResponseError, ValidationError } from '@polar-sh/sdk'
import { useRouter } from 'next/navigation'
import Button from 'polarkit/components/ui/atoms/button'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from 'polarkit/components/ui/atoms/input-otp'
import ShadowBox from 'polarkit/components/ui/atoms/shadowbox'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from 'polarkit/components/ui/form'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

const ClientPage = ({ organization }: { organization: Organization }) => {
  const router = useRouter()
  const form = useForm<{ code: string }>()
  const { control, handleSubmit, setError } = form
  const sessionRequest = useCustomerPortalSessionAuthenticate(api)

  const onSubmit = useCallback(
    async ({ code }: { code: string }) => {
      try {
        const { token } = await sessionRequest.mutateAsync({ code })
        router.push(
          `/${organization.slug}/portal/?customer_session_token=${token}`,
        )
      } catch (e) {
        if (e instanceof ResponseError) {
          const body = await e.response.json()
          if (e.response.status === 422) {
            const validationErrors = body['detail'] as ValidationError[]
            setValidationErrors(validationErrors, setError)
          }
        }
      }
    },
    [sessionRequest, setError, router, organization],
  )

  return (
    <ShadowBox className="flex w-full max-w-7xl flex-col items-center gap-12 md:px-32 md:py-24">
      <div className="flex w-2/3 flex-col gap-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-black dark:text-white">
            Verification code
          </h2>
          <h2 className="dark:text-polar-400 text-lg text-gray-500">
            Enter the verification code sent to your email address.
          </h2>
        </div>
        <Form {...form}>
          <form
            className="flex w-full flex-col items-center gap-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="code"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <InputOTP maxLength={6} pattern="^[A-Z0-9]+$" {...field}>
                        <InputOTPGroup>
                          {Array.from({ length: 6 }).map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="h-16 w-16 text-2xl border-gray-300 dark:border-gray-600"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full"
              loading={sessionRequest.isPending}
              disabled={sessionRequest.isPending}
            >
              Access my purchases
            </Button>
          </form>
        </Form>
      </div>
    </ShadowBox>
  )
}

export default ClientPage

import { useToast } from '@/components/Toast/use-toast'
import { useStore } from '@/store'
import { api } from '@/utils/client'
import { schemas, unwrap } from '@polar-sh/client'
import { formatCurrencyAndAmount } from '@polar-sh/ui/lib/money'
import { useEffect, useState } from 'react'

export const useToastLatestPledged = (
  orgId: string,
  repoId: string,
  issueId: string,
  check: boolean | undefined = true,
): schemas['Pledge'] | null => {
  const { toast } = useToast()
  const [pledge, setPledge] = useState<schemas['Pledge'] | null>(null)
  const latestPledge = useStore((store) => store.latestPledge)
  const latestPledgeShown = useStore((store) => store.latestPledgeShown)
  const setLatestPledgeShown = useStore((store) => store.setLatestPledgeShown)

  useEffect(() => {
    if (!check || !latestPledge || latestPledgeShown) return

    const isMatch =
      latestPledge &&
      latestPledge.pledge.issue.repository.organization.id === orgId &&
      latestPledge.pledge.issue.repository.id === repoId &&
      latestPledge.pledge.issue.id === issueId

    if (!isMatch) return

    const fetchLatestData = () => {
      const request = unwrap(
        api.GET('/v1/pledges/{id}', {
          params: { path: { id: latestPledge.pledge.id } },
        }),
      )

      request.then((pledge) => {
        // TODO: Better error handling
        const successful =
          latestPledge.redirectStatus === 'succeeded' ||
          pledge.state === 'created'

        if (!successful) {
          return
        }

        const issueName = `${pledge.issue.repository.organization.name}/${pledge.issue.repository.name}#${pledge.issue.number}`
        const amount = formatCurrencyAndAmount(pledge.amount, pledge.currency)
        toast({
          title: `You successfully pledged ${amount}`,
          description: `Thanks for backing ${issueName}`,
        })
        setPledge(pledge)
        setLatestPledgeShown(true)
      })
      return request
    }

    fetchLatestData()
  }, [
    orgId,
    repoId,
    issueId,
    check,
    latestPledge,
    toast,
    latestPledgeShown,
    setLatestPledgeShown,
  ])

  return pledge
}

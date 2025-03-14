import { organizationPageLink } from '@/utils/nav'
import { schemas } from '@polar-sh/client'
import { ShadowBoxOnMd } from '@polar-sh/ui/components/atoms/ShadowBox'
import Link from 'next/link'
import { Fragment } from 'react'
import IssueActivityBox from '../Issues/IssueActivityBox'
import IssueFundingDetails from '../Issues/IssueFundingDetails'
import IssueSummary from '../Issues/IssueSummary'

export interface OrganizationIssueSummaryListProps {
  organization: schemas['Organization']
  issues: schemas['IssueFunding'][]
}

export const OrganizationIssueSummaryList = ({
  organization,
  issues,
}: OrganizationIssueSummaryListProps) => {
  if (!issues) {
    return <></>
  }

  return (
    <div className="flex w-full flex-col gap-y-6">
      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <h2 className="text-xl">Crowdfunded Issues</h2>
        <Link
          className="text-sm text-blue-500 dark:text-blue-400"
          href={organizationPageLink(organization, 'issues')}
        >
          <span>View all</span>
        </Link>
      </div>
      <ShadowBoxOnMd>
        <div className="-mx-4 flex flex-col divide-y md:divide-y-0">
          {issues.map((i) => (
            <Fragment key={i.issue.id}>
              <IssueSummary issue={i.issue} />
              {i.total.amount > 0 ||
              !!i.funding_goal ||
              !!i.issue.upfront_split_to_contributors ? (
                <IssueActivityBox>
                  <div className="p-4">
                    <IssueFundingDetails
                      issue={i.issue}
                      organization={organization}
                      total={i.total}
                      fundingGoal={i.funding_goal}
                      pledgesSummaries={i.pledges_summaries}
                    />
                  </div>
                </IssueActivityBox>
              ) : null}
            </Fragment>
          ))}
        </div>
      </ShadowBoxOnMd>
    </div>
  )
}

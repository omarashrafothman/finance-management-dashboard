

import React from 'react'
import DoughnutChart from './DoughnutChart'
import AnimatedCounter from './AnimatedCounter'
function TotalBalanceBox({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
       <DoughnutChart accounts={accounts}/>

        
        
        </div>
        <div className='flex flex-col gap-6'>

<h2 className='header-2'>
Bank Accounts: 
{totalBanks} 

</h2>
<div className='flex flex-col gap-2'>

    <p className='total-balance-label'>

Total Current Balance

    </p>
<div className='total-balance-amount flex-center dap-2'>
<AnimatedCounter amount={totalCurrentBalance}/>
{/* {formatAmount(totalCurrentBalance)} */}

</div>
</div>

        </div>
        </section>
  )
}

export default TotalBalanceBox
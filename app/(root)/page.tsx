import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
  const loggedIn={firstName:'Omar',lastName:"Othman" ,email:"omarothman20002@gmail.com"}
  return (
    <section className='home'>

<div className='home-content'>

<header className='home-header'>
<HeaderBox
type="greeting"
title="welcome"
user={loggedIn?.firstName||'Guest'}
subtext="Access and manage your account and transaction efficiently"

/>

</header>
<TotalBalanceBox

accounts={[]}
totalBanks={1}
totalCurrentBalance={1250.55}


/>

</div>
  <RightSideBar 
      user={loggedIn} 
      transactions={[]}
      banks={[{currentBalance:500.50},{currentBalance:500.50}]}
  />
    </section>
  )
}

export default Home
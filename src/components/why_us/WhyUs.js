import React from 'react'

import Card from './whyUsComp/Card'
import Title from '../title/Title'

import RightStyle from '../styleElment/RightStyle'

function WhyUs() {

  let titleObject = {
    "nameTitle": "Why Us",
    "descriptionTitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of"
  }

  let whyUsData = [
    {
      id: 1,
      title: "Comprehensive coverage",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection.",
    },
    {
      id: 2,
      title: "Hybrid Approach",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection.",
    },
    {
      id: 3,
      title: "monitoring engine keeps",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection.",
    },
    {
      id: 4,
      title: "Always up-to-date",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection.",
    },
    {
      id: 5,
      title: "Post-Alerting Mitigation Plans",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection.",
    },
    {
      id: 6,
      title: "Continues Monitoring",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection.",
    },

  ]
  return (
    <section>
      <RightStyle />
      <div className="container">
        <Title titleObject={titleObject} />
        <div className="grid-why-us">
          {
            whyUsData.map((data) => {
              return (
                <Card whyUsData={data} key={data.id} />
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default WhyUs
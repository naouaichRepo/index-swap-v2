
import { getPosts } from '../utils/mdx-utils';
import moment from 'moment';

import { getGlobalData } from '../utils/global-data';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Index() {

    const [day, setDay] = useState(42);
    const [hour, setHour] = useState(42);
    const [minute, setMinute] = useState(42);
    const [seconde, setSeconde] = useState(42);

    useEffect(() => {

        setInterval(() => {

            const now = moment.utc()
            const releaseDate = moment('2023-10-02T19:41:20Z'); // for example

            setDay( releaseDate.diff(now, 'days') );
            setHour( 60 - parseInt(new Date().getHours()) );
            setMinute(60 - parseInt(new Date().getMinutes()) );
            setSeconde( 60 - parseInt(new Date().getSeconds()) );

        }, 500)


    }, [])


  return (

          <div className="main">
              <div id='content'>
                  <div className='title'>
                      <span>CYBER WITH LOVE</span>
                  </div>
                  <br/>
                  <p>école de cyber sécurité</p>
                  <br/>
                  <p style={{ fontSize: "14px" }}>Limite avant inscription</p>
                  <section>
                      <ul id="countdown">
                          <li><span className="days timenumbers">{day}</span>
                              <p className="timeRefDays timedescription">days</p>
                          </li>
                          <li><span className="hours timenumbers">{hour}</span>
                              <p className="timeRefHours timedescription">hours</p>
                          </li>
                          <li><span className="minutes timenumbers">{minute}</span>
                              <p className="timeRefMinutes timedescription">minutes</p>
                          </li>
                          <li><span className="seconds timenumbers yellow-text">{seconde}</span>
                              <p className="timeRefSeconds timedescription">seconds</p>
                          </li>
                      </ul>
                  </section>
                  <section>
                  <p>Candidater et <Link className="text-animated" href="https://calendly.com/naim-aouaichia/30min" rel="noreferrer" target="_blank">obtenez votre place pour la prochaine rentré</Link></p>
                  </section>

                  <section>
                      <br/><br/><br/>
                      <Link href="/cours" style={{ textDecoration: "underline" }}>{"Acces au cours"}</Link>
                  </section>


              </div>

          </div>

  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

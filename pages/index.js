import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import moment from 'moment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import React, { useState, useEffect } from 'react'

export default function Index({ posts, globalData }) {

    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [seconde, setSeconde] = useState(0);


    useEffect(() => {
        console.log('tototo')

        return () => {
            false;
        }
    })
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
                  <p>Candidater <a href="https://calendly.com/naim-aouaichia/30min" target="_blank">et optenez votre place pour la prochaine rentré</a></p>

              </div>
          </div>

  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

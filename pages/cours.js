
import moment from 'moment';


import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Index() {

    const [courLinks, setCourLinks] = useState([]);
    const [hasCalledCours, setHasCalledCours] = useState(false);

    const timestamp = Date.now().toString()
    const timestampNowFormatted = timestamp.substring(0, timestamp.length - 3);

    const limitDate = 1696362982;

    const dateLimitReached = timestampNowFormatted >= limitDate;
    
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


    useEffect(async () => {
        
        let i = 0;

        while (i < 100) {
            try {
                const response = await axios.get(`/jour${i}.pdf`)
                if(response.status == 200){
                    setCourLinks(oldArray => [...oldArray, `jour${i}`]);
                    setHasCalledCours(true);
                }
            } catch (err) {
                setHasCalledCours(true);
                break;
            }
            i++;
        }
        
    }, [])



  return (

          <div className="main">
              <div id='content'>

                  <div className='title'>
                      <span>Liste des cours</span>
                  </div>

                  <br/><br/>
                    
                    {
                        dateLimitReached && courLinks.length > 0 ? 
                            (courLinks.map(cour => <a href={`/${cour}.pdf`}> <p style={{ fontSize: "14px", margin: "1px" }}>{cour}</p> </a>))
                            :
                            <p style={{ fontSize: "18px", margin: "1px" }}>Les cours seront disponible à partir de la rentré</p>
                    }
                    <br/><br/>
                    <p style={{ fontSize: "11px" }}>Revenez dans</p>
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
                      <br/><br/><br/>
                      <a href="/" style={{ textDecoration: "underline" }}>{"Retour"}</a>
                  </section>

              </div>

          </div>

  );
}



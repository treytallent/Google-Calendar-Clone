export function StaticCalendar() {
   return (
      <>
         <header className="calendar-header">
            <div className="calendar-title">
               <h1 className="header-h1">Calendar</h1>
               <span className="calendar-icon" />
            </div>
            <time className="header-date" dateTime="2024-01">
               January 2024
            </time>
            <button className="header-today-btn">Today</button>
            <div className="header-chivrons">
               <button className="chivron"></button>
               <button className="chivron chivron-next-month-btn"></button>
            </div>
         </header>

         <main className="calendar-main">
            <button className="calendar-add-event-btn">
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <rect
                     x="14"
                     width="10"
                     height="4"
                     transform="rotate(90 14 0)"
                     fill="#58A65C"
                  />
                  <path d="M14 10L10 14V24H14V10Z" fill="#D85140" />
                  <path
                     d="M14 10L10 14L-9.53674e-07 14L-1.12852e-06 10L14 10Z"
                     fill="#5283EC"
                  />
                  <rect x="14" y="10" width="10" height="4" fill="#F1BF42" />
               </svg>
            </button>
            <ol className="calendar-days-list">
               <li className="calendar-day non-month-day">
                  <h2>
                     <abbr title="Sunday">Sun</abbr>
                     <time dateTime="2023-12-31">31</time>
                  </h2>
                  <ol className="day-events-list">
                     <li className="event all-day-event green">
                        <h3 className="event-desc">New Years Eve!</h3>
                     </li>
                     <li className="event all-day-event red">
                        <h3 className="event-desc">New Years Eve!</h3>
                     </li>
                     <li className="event blue">
                        <h3 className="event-desc">
                           <time dateTime="T10:00">10:00am</time>
                           Pick up groceries
                        </h3>
                        <div className="circle-icon red"></div>
                     </li>
                     <li className="event">
                        <button className="all-events-btn">2 More</button>
                     </li>
                  </ol>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr title="Monday">Mon</abbr>
                     <time dateTime="2024-01-01">Jan 1</time>
                  </h2>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr title="Tuesday">Tue</abbr>
                     <time dateTime="2024-01-02">2</time>
                  </h2>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr title="Wednesday">Wed</abbr>
                     <time dateTime="2024-01-03">3</time>
                  </h2>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr title="Thursday">Thu</abbr>
                     <time dateTime="2024-01-04">4</time>
                  </h2>
               </li>
               <li className="calendar-day ">
                  <h2>
                     <abbr title="Friday">Fri</abbr>
                     <time dateTime="2024-01-05">5</time>
                  </h2>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr title="Saturday">Sat</abbr>
                     <time dateTime="2024-01-06">6</time>
                  </h2>
                  <ol className="day-events-list">
                     <li className="event">
                        <h3 className="event-desc">
                           <time dateTime="T09:00">9:00am</time>
                           Timed event
                        </h3>
                        <div className="circle-icon blue"></div>
                     </li>
                     <li className="event blue">
                        <h3 className="event-desc">All day event</h3>
                     </li>
                  </ol>
               </li>
               <li className="calendar-day non-month-day">
                  <h2>
                     <abbr className="sr-only" title="Sunday">
                        Sun
                     </abbr>
                     <time dateTime="2023-12-31">7</time>
                  </h2>
               </li>
               <li className="calendar-day ">
                  <h2>
                     <abbr className="sr-only" title="Monday">
                        Mon
                     </abbr>
                     <time dateTime="2024-01-01">8</time>
                  </h2>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr className="sr-only" title="Tuesday">
                        Tue
                     </abbr>
                     <time dateTime="2024-01-02">9</time>
                  </h2>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr className="sr-only" title="Wednesday">
                        Wed
                     </abbr>
                     <time dateTime="2024-01-03">10</time>
                  </h2>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr className="sr-only" title="Thursday">
                        Thu
                     </abbr>
                     <time dateTime="2024-01-04">11</time>
                  </h2>
               </li>
               <li className="calendar-day today">
                  <h2>
                     <abbr className="sr-only" title="Friday">
                        Fri
                     </abbr>
                     <time dateTime="2024-01-05">12</time>
                  </h2>
               </li>
               <li className="calendar-day">
                  <h2>
                     <abbr className="sr-only" title="Saturday">
                        Sat
                     </abbr>
                     <time dateTime="2024-01-06">13</time>
                  </h2>
                  <ol className="day-events-list"></ol>
               </li>
               {/* Filler to create an accurate grid representation */}
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
               <li className="calendar-day"></li>
            </ol>
         </main>
      </>
   )
}

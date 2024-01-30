export function StaticCalendar() {
   return (
      <>
         <header className="calendar-header">
            <h1 className="header-h1">Calendar</h1>
            <time className="header-date" dateTime="2024-01">
               January 2024
            </time>
            <button className="header-today-btn">Today</button>
            <div className="header-chivrons">
               <button className="header-prev-month-btn"></button>
               <button className="header-next-month-btn"></button>
            </div>
         </header>

         <main className="calendar-main">
            <ol className="calendar-days-list">
               <li className="calendar-day prev-month-day">
                  <abbr title="Sunday">Sun</abbr>
                  <time dateTime="2023-12-31">31</time>
                  <ol className="day-events-list">
                     <li className="event green">
                        <h3 className="event-desc">New Years Eve!</h3>
                        <div className="circle-icon"></div>
                     </li>
                     <li className="event red">
                        <h3 className="event-desc">
                           <time dateTime="T10:00">10:00am</time>
                           Pick up groceries
                        </h3>
                        <div className="circle-icon"></div>
                     </li>
                     <li className="event red">
                        <h3 className="event-desc">
                           <time dateTime="T12:30">12:30pm</time>
                           Business lunch
                        </h3>
                        <div className="circle-icon"></div>
                     </li>
                  </ol>
               </li>
               <li className="calendar-day">
                  <abbr title="Monday">Mon</abbr>
                  <time dateTime="2024-01-01">1</time>
               </li>
               <li className="calendar-day">
                  <abbr title="Tuesday">Tue</abbr>
                  <time dateTime="2024-01-02">2</time>
               </li>
               <li className="calendar-day">
                  <abbr title="Wednesday">Wed</abbr>
                  <time dateTime="2024-01-03">3</time>
               </li>
               <li className="calendar-day">
                  <abbr title="Thursday">Thu</abbr>
                  <time dateTime="2024-01-04">4</time>
               </li>
               <li className="calendar-day today">
                  <abbr title="Friday">Fri</abbr>
                  <time dateTime="2024-01-05">5</time>
               </li>
               <li className="calendar-day">
                  <abbr title="Saturday">Sat</abbr>
                  <time dateTime="2024-01-06">6</time>
                  <ol className="day-events-list">
                     <li className="event green">
                        <h3 className="event-desc">
                           <time dateTime="T09:00">9:00am</time>
                           Timed event
                        </h3>
                        <div className="circle-icon"></div>
                     </li>
                     <li className="event green">
                        <h3 className="event-desc">All day event</h3>
                        <div className="circle-icon"></div>
                     </li>
                  </ol>
               </li>
            </ol>
            <button className="calendar-add-event-btn"></button>
         </main>
      </>
   )
}

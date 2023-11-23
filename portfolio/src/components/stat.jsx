let cardData = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg",
      title: "Sr. Frontend Developer",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Nov 2021 - Present",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg",
      title: "Team Lead",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Jul 2017 - Oct 2021",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg",
      title: "Full Stack Developer",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Dec 2015 - May 2017",
    },
  ];
  
  export default function Cards() {
    return (
      <>
        {cardData.map((el, index) => {
          return (
            <div key={index} className="card--container">
              <img className="upWork" src={el.url} alt="" />
              <div>
                <h3 className="card_mid_title">{el.title}</h3>
                <ul>
                  <li className="ts">{el.content}</li>
                </ul>
              </div>
              <p className="date ts">{el.date}</p>
            </div>
          );
        })}
      </>
    );
  }
  
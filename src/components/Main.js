import React from "react";

function Main() {
  const DataList = [
    {
      id: 1,
      title: "Car Design",
      sub: "Cars",
      coverImg: "images/folio/22.jpeg",
    },
    {
        id: 2,
        title: "App Development",
        sub: "Apps",
        coverImg: "images/folio/1.jpeg",
      },
      {
        id: 3,
        title: "photography",
        sub: "Photos",
        coverImg: "images/folio/2-2.jpeg",
      },
      {
        id: 4,
        title: "photography",
        sub: "Photos",
        coverImg: "images/folio/3.jpeg",
      },
  ];
  return (
    <>
      <div class="gallery-items sf_true">
        <div class="gallery-items-container fl-wrap">
          {DataList.map((data) => {
            return (
              <div key={data.id} class="gallery-item nature">
                <div class="hov_box">
                  <img src={`${data.coverImg}`} alt={data.title} />
                  <div class="overlay"></div>
                  <div class="hov_box-title">
                    <a href="portfolio-single.html" class="ajax">
                      {data.title}
                    </a>
                    <div class="cat_item">{data.sub}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;

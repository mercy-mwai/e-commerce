import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  //console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result);

  const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
    ];

  return (
    <div>
      <PageHeader title="Single Blog Page" curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                  {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>Serenity has taken poseson mying entre soung these sweet morangs spring which 
                                    enoywith whole heart create am alones and feel the chare of exstenceth spot which the blissouls like minneing am soo happy my dear friend absoribed the exquisite
                                    sense enjoy my whole hearts alone and fr the charm of extencenth spotai which was the blis of soulis mineing dear friend soingu absoribed the exquisitesense tranquil existense neglect my talenter should ncapable ofing is drawng singe 
                                    wonderful serenity has taken possession of my entire soulng these sweet
                                    present  moment and yet feel that never was greater artist</p>
                                    <blockquote>
                                        <p>Dynamically recaptlualize distributed technologies is wherease trnkey channels and onotonectally provide access to resource
                                            levelling expertise vias worldwide deliverables uolisticly and aserser are diverse vortals  </p>
                                            <cite>
                                                <a href="#">...Melissa Hunter</a>
                                            </cite>
                                    </blockquote>
                                    <p>
                                        whole heart create am aloness and feel the charm of exstenceth spot which the blissouls like mineing am
                                        soo happy my dears friend absoribed the exquste sense enjoy my whole hearts alone and the fee the charm
                                        of existence spotsi whuch was the bils of souils mineing amsoing dear friend soingu absoribed the 
                                        exquisit sense tranquil existence neglet my talenter should ncapable ofing is drawing singe wonderful
                                        serenity has taken possession of my entire souling these sweet present moment and yet feel that new 
                                        was greatest artist
                                    </p>

                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                    <p>Serenity hasir taken poseson mying entre soung these sweet morngs spring which enoywith whole hearts
                                      create am alones and feel the charm of exstenceth spot which the blissoulslike mineing am soo happy
                                      my dearest friend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of
                                      existence spotsi which were the ills of souils mineing amsoing dear friend soing absoribed
                                    </p>

                                    <div className="video-thumb">
                                      <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                      <a href="https://www.youtube.com/watch?v=iIxZrYzJJ7I" className="video-button popup">
                                      <i className="icofont-ui-play"></i>
                                      </a>
                                    </div>
                                    <p>create am alones and feel the charm of exstenceth spot which the blissoulslike mineing am soo happy
                                      my dearest friend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of
                                      existence spotsi which were the ills of souils mineing amsoing dear friend soing absoribed</p>

                                      <div className="tags-section">
                                        <ul className="tags lab-ul">
                                          <li>
                                            <a href="#">Agency</a>
                                          </li>
                                          <li>
                                            <a href="#">Business</a>
                                          </li>
                                          <li>
                                            <a href="#">Personal</a>
                                          </li>
                                        </ul>
                                        <ul className="lab-ul social-icons">
                                            {
                                              socialList.map((val,i)=>(
                                              <li key={i}>
                                                <a href="#" className={val.className}>
                                                  <i className={val.iconName}></i>
                                                </a>
                                              </li>
                                              ))
                                            }
                                        </ul>
                                      </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i> Previous Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes Via Technical Sound Models Authoritative
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            <i className="icofont-double-right"></i> Previous Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes Via Technical Sound Models Authoritative
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">Right Side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

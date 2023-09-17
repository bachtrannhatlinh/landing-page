import React, { useState, useEffect } from 'react'

import { drg, avatar, freeFire, topWeb, zombieSurviva, logo, search, bell, comments, plus, plus_circle } from 'src/images'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CardJoin from 'src/components/CardJoin'
import Card from '../../components/Card'
import UserFollow from '../../components/UserFollow'


import './styled.scss'
function Home() {
  const [listCard, setListCard] = useState([])
  const [listUserFollow, setListUserFollow] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/assets/listCard.json');
        // const response = await fetch('/src/assets/listCard.json');
        const data = await response.json();

        setListCard(data)

      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    }

    fetchData()
  }, [])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/assets/listUserFollow.json');
        const data = await response.json();

        setListUserFollow(data)

      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    }

    fetchData()
  }, [])


  return (
    <div className='wrapper'>
      <aside>
        <section>
          <div className='logo'>
            <img src={logo} />
            <div className='title'>Unity</div>
          </div>
          <ul className='menu line-gray'>
            <div className='title'>New Feeds</div>
            <li className='item-active'>
              <img src={logo} /> <span>New Feed</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>Trending</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>Folowing</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>Your Videos</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>Playlist</span>
            </li>
          </ul>
        </section>
        <section>
          <ul className='menu line-gray'>
            <div className='title'>Following</div>
            <li className='item-unactive'>
              <img src={logo} /> <span>Nabc</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>xyz</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>aaa</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>xxx</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>yyy</span>
            </li>
          </ul>
        </section>
        <section>
          <ul className='menu line-gray'>
            <div className='title'>Unity Gamming</div>
            <li className='item-unactive'>
              <img src={logo} /> <span>Nabc</span>
            </li>
            <li className='item-unactive'>
              <img src={logo} /><span>xyz</span>
            </li>
            <li className='block-underfind'>

            </li>
            <li>
              <CardJoin />
            </li>
          </ul>
        </section>
        <section className='note'>
          <li className='d-flex justify-content-center'>
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
          </li>
        </section>
      </aside>
      <article>
        <header className='d-flex justify-content-between align-items-center'>
          {/* todo dropdown */}
          {/* <div>
            Browse
          </div> */}
          <div className='search'>
            <img src={search} />
            <input type="text" class="form-control" placeholder="Search Everything" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className='header-right'>
            <div className='space-item'>
              <img src={plus} />
            </div>
            <div className='space-item'>
              <img src={comments} />
            </div>
            <div className='space-item mr-100'>
              <img src={bell} />
            </div>
            <div className='avatar'>
              <img src={avatar} />
            </div>
          </div>
        </header>
        <section className='caroussel'>
          <Carousel autoPlay infiniteLoop centerMode interval={2000}>
            <div>
              <img alt="" src={drg} />
            </div>
            <div>
              <img alt="" src={freeFire} />
            </div>
            <div>
              <img alt="" src={topWeb} />
            </div>
          </Carousel>
        </section>
        <section id='content'>
          <section className='list-card'>
            <div className='list-card-title'>
              <h1>Live Channels</h1>
              {/* todo dropdown */}
              {/* <div>Popular</div> */}
            </div>
            <div className='mt-4 list-card-content'>
              {
                listCard?.map(item => {
                  return (
                    <Card
                      item={item}
                    />
                  )
                }
                )
              }
            </div>
          </section>
          <section className='follow-you'>
            <h2>From Channels You Follow</h2>
            <div className='d-flex justify-content-left '>
              <div className='add'>
                <img src={plus_circle} alt='plus-circle' />
                <p>Add Your</p>
              </div>
              {
                listUserFollow?.map(item => {
                  return (
                    <UserFollow
                      userFollow={item}
                    />
                  )
                })
              }
            </div>
          </section>
          <section className='poular-categories'>
            <h2>Popular Categories</h2>
            <div className='wrapper'>
              <div className='poular-categories-left'>
                <div className='content-left'>
                  <h3>Valorant</h3>
                  <div>4.9K viewers</div>
                  <button>Follow</button>
                </div>
              </div>
              <div className='poular-categories-right-one'>
                <div className='img'>
                  <img src={freeFire} alt='test' />
                </div>
                <div className='content-right'>
                  <div className='shooter'>Shooter</div>
                  <h5>Fortnite</h5>
                  <div className="view">4.9K viewers</div>
                  <button>Follow</button>
                </div>
              </div>
              <div className='poular-categories-right-two'>
                <div className='img'>
                  <img src={topWeb} alt='test' />
                </div>
                <div className='content-right'>
                  <div className='shooter'>Shooter</div>
                  <h5>Fortnite</h5>
                  <div className="view">4.9K viewers</div>
                  <button>Follow</button>
                </div>
              </div>
              <div className='poular-categories-right-three'>
                <div className='img'>
                  <img src={zombieSurviva} alt='test' />
                </div>
                <div className='content-right'>
                  <div className='shooter'>Shooter</div>
                  <h5>Fortnite</h5>
                  <div className="view">4.9K viewers</div>
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </section>
          <section className='list-card recommended'>
            <div className='d-flex justify-content-between'>
              <h2>Recommended Videos</h2>
              <div>Most Recent</div>
            </div>
            <div className='mt-4 list-card-content'>
              {
                listCard?.map(item => {
                  return (
                    <Card
                      item={item}
                    />
                  )
                }
                )
              }
            </div>
          </section>
        </section>
      </article >
    </div >
  )
}

export default Home

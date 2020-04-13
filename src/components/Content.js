import React, { Component } from 'react';

import '../components/assets/styles/content.css'
import Portfolio from './assets/img/Portfolio.jpg'
import Blog from './assets/img/blog.jpg'
import Pod from './assets/img/pod.jpg'

class Content extends Component {
    render() {
        return (
            <div>
                
                <div className="content">
                <img className="" src={Portfolio} alt='portfolio' />
                  <h4>Portfolio</h4>
                  <p>
                    Portfolio merupakan sarana untuk menampilkan beberapa
                    project yang telah saya lakukan selama ini
                  </p>
                </div>

                <div className="content">
                <img className="" src={Blog} alt='Blog' />
                <h4>Blog</h4>
                <p>
                  Berisi tentang kisah yang menarik untuk saya ceritakan didalam
                  blog perjalanan karir atau hanya sekadar sharing santai
                  mengenai programing kreatif industri dll
                </p>
                </div>

                <div className="content">
                <img className="" src={Pod} alt='podcasts' />
                <h4>Podcast stereotype</h4>
               
                <p>
                  Podcast untuk berbagi cerita mengenai pengalaman terkait
                  berbagai isu yang ada di masyarakat. Karena kami percaya
                  setiap manusia memiliki kisah yang unik dan bisa membuka
                  perspektif lain terhadap individu ataupun kelompok tertentu.
                  oleh : @ozy_ahmad dan @ajengdinii . Kalian punya saran atau
                  cerita yang ingin disampaikan? silakan Kontak:
                  podcaststereotype@gmail.com twitter dan instagram:
                  @podstereotype
                </p>
                </div>
                

            </div>
        )
    }
}

export default Content
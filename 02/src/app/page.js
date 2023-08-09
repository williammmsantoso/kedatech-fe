import Client from '@/layouts/Client';

export default function Home() {
  return (
    <Client metaTitle='Home' metaDescription='Home'>
      <div className="home-container">
        <div className="banner-home">
          <div className="text-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, explicabo cumque? Lorem ipsum dolor, sit amet consectetur
          </div>
          <div className="quotes">
            "Excepteur sint occaecat cupidot npn proident"
          </div>
          <img src="/statistic.png" alt="statistic" />
        </div>
      </div>
    </Client>
  )
}

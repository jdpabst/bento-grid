import './Home.scss';

export default function Home() {

 return (
  <div className='main-container'>
   <ul className='list-container'>
    <li className='one'>
     <div className='section-1'>
      <h1>Create and schedule content <span style={{ color: 'hsl(256, 67%, 59%)' }}>quicker.</span></h1>
      <img src='/assets/images/illustration-create-post.webp' />
     </div>
    </li>
    <li className='two'>
     <div className='section-2'>
      <h1>Social Media <span style={{ color: 'hsl(39, 100%, 71%)' }}>10x</span> <span style={{ 'fontStyle': 'italic' }}>Faster</span> with AI</h1>
      <img src='/assets/images/illustration-five-stars.webp' />
      <p>Over 4,000 5-star reviews</p>
     </div>
    </li>
    <li className='three'>
     <div className='section-3'>
      <h1>Schedule to social media.</h1>
      <img src='/assets/images/illustration-schedule-posts.webp' />
      <p>Optimize post timings to publish content at the perfect time for your audience.</p>
     </div>
    </li>
    <li className='four'>
     <div className='section-4'>
      <h1>Write your content using AI.</h1>
      <img src='/assets/images/illustration-ai-content.webp' />
     </div>
    </li>
    <li className='five'>
     <div className='section-5'>
      <img src='/assets/images/illustration-multiple-platforms.webp' />
      <h1>Manage multiple accounts and platforms.</h1>
     </div>
    </li>
    <li className='six'>
     <div className='section-6'>
      <h1>{'>'}56%</h1>
      <p>faster audience growth</p>
      <img src='/assets/images/illustration-audience-growth.webp' />

     </div>
    </li>
    <li className='seven'>
     <div className='section-7'>
      <h1>Maintain a consistent posting schedule.</h1>
      <img src='/assets/images/illustration-consistent-schedule.webp' />
     </div>
    </li>
    <li className='eight'>
     <div className='section-8'>
      <img src='/assets/images/illustration-grow-followers.webp' />
      <h1>Grow followers with non-stop content.</h1>
     </div>
    </li>
   </ul>
  </div>
 )
}
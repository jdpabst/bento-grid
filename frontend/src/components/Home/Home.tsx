import './Home.scss';

export default function Home() {

 return (
  <div className='main-container'>

   <ul className='list-container'>

    <li className='group-1'>
     <div className='two margin-bottom-mobile'>
      <div className='section-2'>
       <h1>Social Media <span style={{ color: 'hsl(39, 100%, 71%)' }}>10x</span> <span style={{ 'fontStyle': 'italic' }}>Faster</span> with AI</h1>
       <img src='/assets/images/illustration-five-stars.webp' />
       <p>Over 4,000 5-star reviews</p>
      </div>
     </div>
     <div className='group-1-subgroup'>
      <div className='five margin-bottom-mobile'>
       <div className='section-5'>
        <img src='/assets/images/illustration-multiple-platforms.webp' />
        <h1>Manage multiple accounts and platforms.</h1>
       </div>
      </div>
      <div className='seven margin-bottom-mobile'>
       <div className='section-7'>
        <h1>Maintain a consistent posting schedule.</h1>
        <img src='/assets/images/illustration-consistent-schedule.webp' />
       </div>
      </div>
     </div>
     <div className='three margin-bottom-mobile'>
      <div className='section-3'>
       <h1>Schedule to social media.</h1>
       <img src='/assets/images/illustration-schedule-posts.webp' />
       <p>Optimize post timings to publish content at the perfect time for your audience.</p>
      </div>
     </div>
    </li>

    <li className='group-2'>
     <div className='six margin-bottom-mobile'>
      <div className='section-6'>
       <h1>{'>'}56%</h1>
       <p>faster audience growth</p>
       <img src='/assets/images/illustration-audience-growth.webp' />
      </div>
     </div>
     <div className='eight margin-bottom-mobile'>
      <div className='section-8'>
       <img src='/assets/images/illustration-grow-followers.webp' />
       <h1>Grow followers with non-stop content.</h1>
      </div>
     </div>
    </li>

    <li className='group-3'>
     <div className='one margin-bottom-mobile'>
      <div className='section-1'>
       <h1>Create and schedule content <span style={{ color: 'hsl(256, 67%, 59%)' }}>quicker.</span></h1>
       <img src='/assets/images/illustration-create-post.webp' />
      </div>
     </div>
     <div className='four margin-bottom-mobile'>
      <div className='section-4'>
       <h1>Write your content using AI.</h1>
       <img src='/assets/images/illustration-ai-content.webp' />
      </div>
     </div>
    </li>

   </ul>

  </div>
 )
}
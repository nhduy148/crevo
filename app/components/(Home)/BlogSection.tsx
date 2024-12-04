import Image from 'next/image';
import React from 'react';

const BlogSection = () => {
  return (
    <section className='blog-sa'>
      <div className='container section-padding bord-thin-top-light'>
        <div className='sec-head mb-100'>
          <div className='row'>
            <div className='col-lg-5'>
              <h6 className='sub-head'>Latest Articles</h6>
            </div>
            <div className='col-lg-7'>
              <h4>
                The place that we share everything related to
                <span className='sub-color inline'>
                  design trends, tips and more.
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='item md-mb50'>
              <div className='img fit-img'>
                <Image
                  src='/assets/imgs/blog/1.jpg'
                  alt=''
                  width={200}
                  height={200}
                />
              </div>
              <div className='cont mt-30'>
                <h6>
                  <a href='./blog-details.html'>
                    Hubfolio agency revolutionizes work with the
                    <br />
                    power of AI-Driven
                  </a>
                </h6>
                <div className='info d-flex align-items-center mt-20'>
                  <a href='#0' className='tag'>
                    <span>Design Trends</span>
                  </a>
                  <a href='#0' className='date'>
                    <span>/ May 15, 2024</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='item'>
              <div className='img fit-img'>
                <Image
                  src='/assets/imgs/blog/2.jpg'
                  alt=''
                  width={200}
                  height={200}
                />
              </div>
              <div className='cont mt-30'>
                <h6>
                  <a href='./blog-details.html'>
                    Common UX painpoints in Dashboard-related
                    <br />
                    projects
                  </a>
                </h6>
                <div className='info d-flex align-items-center mt-20'>
                  <a href='#0' className='tag'>
                    <span>Experience</span>
                  </a>
                  <a href='#0' className='date'>
                    <span>/ May 15, 2024</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

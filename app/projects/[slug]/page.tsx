import React from 'react';
import dataProject from '../../../data/project.json';
import Image from 'next/image';

export type ProjectDetail = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  client: string;
  start_date: string;
  duration: number;
  overview: string;
};

const ProjectDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const project = dataProject.find((p: ProjectDetail) => p.id === slug);
  return (
    <main>
      <header className='work-hed2 section-padding pb-0'>
        <div className='container'>
          <div className='caption sec-head text-center mb-80'>
            <span className='sub-head mb-10'>{project?.tagline}</span>
            <h1 className='fz-80 fw-600'>{project?.title}</h1>
          </div>
          <div className='info mb-80 text-center'>
            <div className='row'>
              <div className='col-md-6 col-lg-3'>
                <div className='item mb-30'>
                  <span className='opacity-8 mb-10'>Category</span>
                  <h6>{project?.category}</h6>
                </div>
              </div>
              <div className='col-md-6 col-lg-3'>
                <div className='item mb-30'>
                  <span className='opacity-8 mb-10'>Client</span>
                  <h6>{project?.client}</h6>
                </div>
              </div>
              <div className='col-md-6 col-lg-3'>
                <div className='item mb-30'>
                  <span className='opacity-8 mb-10'>Start Date</span>
                  <h6>{project?.start_date}</h6>
                </div>
              </div>
              <div className='col-md-6 col-lg-3'>
                <div className='item'>
                  <span className='opacity-8 mb-10'>Duration</span>
                  <h6>{project?.duration} months</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='fit-img radius-15'>
            <Image
              src={project?.thumbnail_url}
              alt=''
              data-lag='0'
              data-speed='0.5'
              width={2000}
              height={2000}
              quality={100}
            />
          </div>
        </div>
      </header>

      <section className='proj-details section-padding'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <div>
                <h2>Brand overview</h2>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='content'>
                <div className='text mt-30 mb-30'>
                  <p>
                    Duis sed augue condimentum, blandit sapien in, accumsan
                    eros. Curabitur sodales pulvinar libero et venenatis. Nullam
                    eleifend risus a quam dictum auctor. Mauris at leo non dui
                    euismod varius. Cras vel erat at est aliquam laoreet. Donec
                    tincidunt, nunc eu gravida malesuada, tellus leo.
                  </p>
                </div>
                <div className='text mb-30'>
                  <p>
                    Maecenas sed tortor molestie, sagittis nibh sit amet,
                    dapibus felis. Vivamus sed neque iaculis, ultrices nulla eu,
                    venenatis dui. Praesent luctus urna eu dapibus pulvinar.
                    Curabitur sed magna accumsan neque fermentum laoreet. Ut
                    nunc.
                  </p>
                </div>
                <ul className='rest'>
                  <li className='mb-15 pb-15 bord-thin-bottom-light'>
                    Branding and identity
                  </li>
                  <li className='mb-15 pb-15 bord-thin-bottom-light'>
                    Websites and digital platforms
                  </li>
                  <li>Content strategy for social media</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row sm-marg mt-80'>
            <div className='col-md-6'>
              <div className='img sm-mb10'>
                <Image
                  src={project?.gallery_url[0]}
                  alt=''
                  width={2000}
                  height={2000}
                  quality={100}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='img'>
                <Image
                  src={project?.gallery_url[1]}
                  alt=''
                  width={2000}
                  height={2000}
                  quality={100}
                />
              </div>
            </div>
            <div className='col-md-12'>
              <div className='img mt-10'>
                <Image
                  src={project?.gallery_url[2]}
                  alt=''
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className='row justify-content-between mt-80'>
            <div className='col-lg-5 valign'>
              <div className='content'>
                <h3>
                  Product making for
                  <br />
                  friendly users
                </h3>
                <div className='text mt-30'>
                  <p>
                    Duis sed augue condimentum, blandit sapien in, accumsan
                    eros. Curabitur sodales pulvinar libero et venenatis. Nullam
                    eleifend risus a quam dictum auctor. Mauris at leo non dui
                    euismod varius. Cras vel erat at est aliquam laoreet.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='content'>
                <div className='accordion' id='accordionExample'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='heading1'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse1'
                        aria-expanded='true'
                        aria-controls='collapse1'
                      >
                        <span>1.</span>
                        Research
                      </button>
                    </h2>
                    <div
                      id='collapse1'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading1'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        <p>
                          Once the wireframe get approved at step 1, we’ll build
                          prototype design to visually the idea
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item active'>
                    <h2 className='accordion-header' id='heading2'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse2'
                        aria-expanded='false'
                        aria-controls='collapse2'
                      >
                        <span>2.</span>
                        Concept Design
                      </button>
                    </h2>
                    <div
                      id='collapse2'
                      className='accordion-collapse collapse show'
                      aria-labelledby='heading2'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        <p>
                          Once the wireframe get approved at step 1, we’ll build
                          prototype design to visually the idea
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='heading3'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse3'
                        aria-expanded='false'
                        aria-controls='collapse3'
                      >
                        <span>3.</span>
                        Implementation
                      </button>
                    </h2>
                    <div
                      id='collapse3'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading3'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        <p>
                          Once the wireframe get approved at step 1, we’ll build
                          prototype design to visually the idea
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='heading4'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapse4'
                        aria-expanded='false'
                        aria-controls='collapse4'
                      >
                        <span>4.</span>
                        Testing
                      </button>
                    </h2>
                    <div
                      id='collapse4'
                      className='accordion-collapse collapse'
                      aria-labelledby='heading4'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        <p>
                          Once the wireframe get approved at step 1, we’ll build
                          prototype design to visually the idea
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;

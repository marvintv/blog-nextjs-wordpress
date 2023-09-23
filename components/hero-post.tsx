"use client"
import Avatar from './avatar'
import Date from './date'
import Image from 'next/image'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
   <>
    {/* <section>
      <div className="mb-8 md:mb-16">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section> */}
<div>
   <Link href={`/posts/${slug}`} className="card w-full glass">
   <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={ 
        'hover:shadow-medium transition-shadow duration-200'}
    />
     
      <div className="card-body">
        <div className='flex justify-between'>
          <div>
              <h2 className="card-title text-4xl">{title}</h2>
              <div className="mb-4 md:mb-0 text-lg">
                  <Date dateString={date} />
              </div>
          </div>
          <Avatar author={author} />
        </div>
        <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          >
        </div>
            <div className="card-actions justify-end">

            <button className='btn btn-primary'>
              Read now
            </button>
            </div>
      </div>
    </Link>

</div>
     
   </>

  )
}

import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
    {/* <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Avatar author={author} />
    </div> */}

<div className="card w-full glass">
<div>{coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
        </div>
<div className="card-body">
  <div className='flex justify-between'>
      <div className='px-2'>
      <h2 className="card-title">{title}</h2>
        <div
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <div className="text-lg pb-5">
            <Date dateString={date} />
        </div>
      </div>

    <div className='align-top'>
    <Avatar author={author} />
    </div>
</div>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Read now</button>
  </div>
</div>
</div>

</>
  )
}

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

<div>
<div className="card w-full glass">
<div>{coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
        </div>
<div className="card-body">
  <div className='flex justify-between'>
      <div className='px-2'>
      <h2 className="card-title">{title}</h2>
        {/* <div
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            > */}
            <div className="text-lg pb-5">
            <Date dateString={date} />
        </div>
      </div>

    <div className='align-top'>
    <Avatar author={author} />
    </div>
</div>
  <div className="card-actions justify-end">
  <Link href={`/posts/${slug}`} className="btn btn-primary">Read now</Link>
  </div>
</div>
</div>
</div>
  )
}

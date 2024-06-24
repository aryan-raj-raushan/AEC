import BlogsCard from '@/src/Components/card/blogsCard';
import React from 'react'

const RecentPost = ({visibleBlogs}:any) => {
  return (
    <div>
        <section className="max-w-screen-xl mx-auto mb-8 my-10 px-4">
            <h3 className="text-3xl font-semibold pb-3">Recent Post</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {visibleBlogs &&
                visibleBlogs
                  .slice()
                  .sort((a:any, b:any) => {
                    const dateA = new Date(a.attributes.updatedAt);
                    const dateB = new Date(b.attributes.updatedAt);
                    if (dateA > dateB) return -1;
                    if (dateA < dateB) return 1;
                    return 0;
                  })
                  .slice(0, 3)
                  .map((item: any, index: number) => (
                    <div key={index}>
                      <BlogsCard BlogData={item?.attributes} id={item?.id} />
                    </div>
                  ))}
            </div>
          </section>
    </div>
  )
}

export default RecentPost
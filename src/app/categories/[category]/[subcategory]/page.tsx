import Subcategory_Cards_Container from "@/components/containers/Subcategory_Cards_Container"


type typePage = {
    params: Promise<{subcategory: string}>
}

export default async function page({params}: typePage) {
    const {subcategory} = await params
  return (
    <div>
        <Subcategory_Cards_Container subcategory={subcategory} />
    </div>
  )
}

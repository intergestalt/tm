import CardVideo from '/components/Widgets/CardVideo.svelte'
import ContentBox from '/components/Atoms/Card.svelte'

export function mapTypeHandleToComponent(entry) {
  switch (entry.typeHandle) {
    case "video":
      return {
        component: CardVideo,
          props: {
            title: entry.title,
            subtitle: "(Donna Haraway)",
            image: "https://placeimg.com/640/480/people",
          }
      }
      break
    default:
      return {
        component: ContentBox,
        content: JSON.stringify(entry)
      }
  }
}
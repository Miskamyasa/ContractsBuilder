export default function SiteFooter() {
  return (
    <footer class="container row overflow-hidden h-14 my-2 lg:my-3 rounded-lg shadow-md bg-zinc-800 text-zinc-100">
      <p class="text-sm">
        <span>Contracts Builder</span>
        <span> © Paragraph.red</span>
        <span class="font-bold">&nbsp;</span>
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

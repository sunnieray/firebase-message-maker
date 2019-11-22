import messageImg from '../../assest/message.jpeg'

export default function Home(){
return `
  <figure class="figure">
  <img src="${messageImg}" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
  <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
</figure>
`;
}
<script setup>
const { locale } = useI18n()

useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'About page of haqizza web' },
    { property: 'og:title', content: 'About | haqizza' },
    { property: 'og:description', content: 'About page of haqizza web' },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
})
</script>

<template>
  <div class="flex">
    <nav id="toc" class="w-1/3 sticky top-0 h-fit">
      <div class="my-12 text-center text-2xl font-bold">
        {{ $t('about') }}
      </div>
      <ul>
        <li><a href="#aboutMe" class="">About Me</a></li>
        <li><a href="#y2019">2019</a></li>
        <li><a href="#y2020">2020</a></li>
        <li><a href="#y2022">2022</a></li>
        <li><a href="#y2023">2023</a></li>
        <li><a href="#y2024">2024</a></li>
        <li><a href="#y2025">2025</a></li>
      </ul>
    </nav>
    <div class="flex-1">
      <section id="aboutMe">
        <h1 class="yearTitle !border-yellow-200">Hello!</h1>
        <p class="text-md leading-10">
          I am an ordinary guy that into programming and books.<br>
          I like trying to program anything from web to microcontroller, but not an expert.<br>
          I currently can speak in Sundanese, Indonesian, Japanese, and English, and learning Arabic.
        </p>  
      </section>

      <hr class="my-24 border-none">

      <section id="y2019" class="my-12">
        <h1 class="yearTitle">2019</h1>
        <ul class="list-disc">
          <li>Graduated from <strong>SMKN 2 Bandung</strong> (Vocational High School) in Software Engineering major. <Tag text="May"/> </li>
          <li>Working on Collaborative Problem-Solving Web Application (a joint research of UPI and IPB). <Tag text="Aug--Oct"/></li>
          <li>Entered Universitas Pendidikan Indonesia.<Tag text="Sep"/></li>
          <li>Started Volunteering at <strong>Tarbiyah Sunnah Learning</strong> as a Web Developer. <Tag text="Dec"/></li>
        </ul>
      </section>

      <hr class="my-24 border-none">

      <section id="y2020" class="my-12">
        <h1 class="yearTitle">2020</h1>
        <ul class="list-disc">
          <li>Joined <strong>STEM Education Creativity Center of Excellence UPI</strong> as an instructor. <Tag text="Mar"/></li>
          <li>Started building and managing <strong>STEM Education Creativity Center of Excellence UPI</strong>'s Wordpress website. <Tag text="May"/></li>
        </ul>
      </section>

      <hr class="my-24 border-none">
      
      <section id="y2022" class="my-12">
        <h1 class="yearTitle">2022</h1>
        <ul class="list-disc">
          <li>Ended Volunteering at <strong>Tarbiyah Sunnah Learning</strong>. <Tag text="Feb"/></li>
          <li>Working on Sinar Karya Nusa's Profile Website and CMS as a Front-End Web Developer. <Tag text="Mar--May"/></li>
          <li>Started intern at <strong>Direktorat Sistem dan Teknologi Informasi Universitas Pendidikan Indonesia</strong>. <Tag text="Nov"/></li>
        </ul>
      </section>

      <hr class="my-24 border-none">

      <section id="y2023">
        <h1 class="yearTitle">2023</h1>
        <ul class="list-disc">
          <li>Finished intern at <strong>Direktorat Sistem dan Teknologi Informasi Universitas Pendidikan Indonesia</strong> as a Full-Stack Web Developer. <Tag text="Jan"/></li>
          <li>Working part-time at <strong>Suteki Karya Nusantara</strong> as a Front-End Web Programmer. <Tag text="May-Aug"/></li>
        </ul>
      </section>
      
      <hr class="my-24 border-none">

      <section id="y2024">
        <h1 class="yearTitle">2024</h1>
        <ul class="list-disc">
          <li>Graduated from Universitas Pendidikan Indonesia with a Computer Science bachelor degree. <Tag text="Jan"/></li>
          <li>Continue at <strong>STEM Education Creativity Center of Excellence UPI</strong></li>
        </ul>
      </section>

      <hr class="my-24 border-none">

      <section id="y2025">
        <h1 class="yearTitle">2025</h1>
        <ul class="list-disc">
          <li>Joined <strong>Tokyo Internship Program</strong> held by <strong>Tokyo Metropolitan Goverment</strong> at <strong>Tokai Business Service Corp.</strong>. <Tag text="Oct--Dec"/></li>
        </ul>
      </section>

      <hr class="my-24 border-none">
    </div>
  </div>
</template>

<style>
@reference "../assets/tailwind.css";
#toc {
  /* Tells the browser this container groups scroll targets */
  scroll-target-group: auto; 
}

/* Styles the link when its target section is in the viewport */
a:target-current {
  @apply font-bold text-2xl text-blue-400
}

li {
  @apply my-4
}

.yearTitle {
  @apply text-3xl font-bold border-l-[8px] border-blue-500 px-3
}

.tag {
  @apply px-1 py-[0.25] mx-1 border border-blue-500 bg-blue-800/50 rounded-md
}
</style>
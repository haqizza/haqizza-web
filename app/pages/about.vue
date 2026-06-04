<script setup>

</script>

<template>
  <div class="my-12 text-center text-2xl font-bold">
    {{ $t('about') }}
  </div>

  <p>Hello!</p>
  
  <p>
    I am an ordinary guy that into programming and books.<br>
    I like trying to program anything from web to microcontroller, but not an expert.<br>
    I currently can speak in Sundanese, Indonesian, English, and Japanese, and learning Arabic.

  </p>
  <hr class="my-12 border-dotted">
  <h1 class="text-2xl font-black ">History</h1>

  <div class="my-12">
    <Accordion
      title="2019"
      :list="[
        'Graduated from <strong>SMKN 2 Bandung</strong> (Vocational High School) in Software Engineering major. [May]',
        'Working on Collaborative Problem-Solving Web Application (a joint research of UPI and IPB). [Aug--Oct]',
        'Entered Universitas Pendidikan Indonesia. [Sep]',
        'Started Volunteering at <strong>Tarbiyah Sunnah Learning</strong> as a Web Developer. [Dec]',
      ]"
    />

    <Accordion
      title="2020"
      :list="[
        'Joined <strong>STEM Education Creativity Center of Excellence UPI</strong> as an instructor. [Mar]',
        'Started building and managing <strong>STEM Education Creativity Center of Excellence UPI</strong>\'s Wordpress website. [May]',
      ]"
    />
    <div class="px-5 flex flex-col">
      <span>・</span>
      <span>・</span>
      <span>・</span>
    </div>
    <Accordion
      title="2022"
      :list="[
        'Ended Volunteering at <strong>Tarbiyah Sunnah Learning</strong>. [Feb]',
        'Working on Sinar Karya Nusa\'s Profile Website and CMS as a Front-End Web Developer. [Mar--May]',
        'Started intern at <strong>Direktorat Sistem dan Teknologi Informasi Universitas Pendidikan Indonesia</strong>. [Nov]',
      ]"
    />
    <Accordion
      title="2023"
      :list="[
        'Ended intern at <strong>Direktorat Sistem dan Teknologi Informasi Universitas Pendidikan Indonesia</strong> as a Full-Stack Web Developer. [Jan]',
        'Started working part-time at <strong>Suteki Karya Nusantara</strong> as a Front-End Web Programmer. [May--Aug]',
      ]"
    />
    <Accordion
      title="2024"
      :list="[
        'Graduated from Universitas Pendidikan Indonesia with a Computer Science bachelor degree. [Jan]',
        'Still continue at <strong>STEM Education Creativity Center of Excellence UPI</strong>',
      ]"
    />
    <Accordion
      title="2025"
      :list="[
        'Joined <strong>Tokyo Internship Program</strong> held by <strong>Tokyo Metropolitan Goverment</strong> at <strong>Tokai Business Service Corp.</strong>. [Oct--Dec]',
      ]"
    />
  </div>

  <footer class="my-12 py-4 flex flex-row justify-center items-center text-white border-t border-dashed">
    <hr class="grow border-1 border-gray-700 mx-4">
    <span>by Muhammad Izzatul Haq | Built with Nuxt.</span>
    <hr class="grow border-1 border-gray-700 mx-4">
  </footer>
</template>
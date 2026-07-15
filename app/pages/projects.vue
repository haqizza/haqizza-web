<script setup>
const { locale } = useI18n()

useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'haqizza\'s projects showcase' },
    { property: 'og:title', content: 'Projects | haqizza' },
    { property: 'og:description', content: 'haqizza\'s projects showcase' },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
})
</script>

<template>
  <div class="my-12 text-center text-2xl font-bold">
    {{ $t('projects.title') }}
  </div>

  <div class="grid grid-cols-2 gap-8">
    <ProjectCard
      title="Collaborative Problem Solving Web Application (Joint Research of UPI and IPB)"
      url="https://github.com/haqizza/cps-v2"
      displayImageUrl="/images/cps.png"
      imageAlt="CPS Web sample image"
    >
      <template #description>
        <p>
          The project is to create a web application to test some unique questions for Collaborative Problem-Solving type questions for middle-high school and high school, and it is automatically graded a student's cognitive and collaborative ability based on Natural Language Processing.
        </p>
        <p>I working here on the frontend side on Vue and Laravel to make the questions working.</p>
        <p>I am currently working on it again</p>
      </template>
    </ProjectCard>

    <ProjectCard
      title="Simple Video Skipper Chrome Extension"
      url="https://github.com/haqizza/video-skipper-ext"
      displayImageUrl="https://raw.githubusercontent.com/haqizza/video-skipper-ext/refs/heads/main/icon.png"
      imageAlt="Simple video skipper chrome extension icon"
    >
      <template #description>
        <p>
          Since Youtsube (ようつべ) is blocking the video player after 3 video when using ad blocker (01/11/23), it's been so frustrating. I don't want to listen to the music played or watch the ad video. So, This extension (bi ithnillah) may help you (me) to skip the ad by setting the current time to the end of the video without triggering the ad blocker-blocker.<br>
          (from repo description)

        </p>
      </template>
    </ProjectCard>

    <ProjectCard
      title="Pakuman: CLI Pacman Multiplayer Game using ncurses and multithreading"
      url="https://github.com/haqizza/pakuman"
    >
      <template #description>
        <p>
          Pacman Multiplayer Game written in C with ncurses to be playing in CLI.<br>
          I'm struggled when working on this task in my college, and enjoying it.<br>
          I'm amazed at the developers who are working for projects in low level language like this.

          <br><br>
          [Gemini Description]<br>
          Interface: It runs entirely in the terminal using the ncurses library to render the game board and handle UI in the text console.
          <br>
          Architecture: It utilizes multithreading, which is necessary for handling simultaneous player inputs, ghost movements, and game state updates in a real-time multiplayer CLI environment.
          <br>
          Language: Given the use of ncurses and manual multithreading for a terminal application, it is built using C or C++.
        </p>
      </template>
    </ProjectCard>

    <ProjectCard
      title="Mechatronics Controller"
      url="https://github.com/haqizza/mechatronics_controller"
    >
      <template #description>
        <p>
          This is STEM Education Center 4DFrame Mechatronics Controller.
          <br><br>
          This is a Flutter application for controlling 4DFrame Mechatronics mainboard.
          <br><br>
          Since there are problems with some 4DFrame Mechatronics mainboard that not working with the new application published by the manufacturer, we decide to build a new application to solve this problem.
          
        </p>
      </template>
    </ProjectCard>

    <ProjectCard
      title="4DFrame Tubes and Connectors Controller"
      url="https://github.com/haqizza/yon_dframe_counter"
    >
      <template #description>
        <p>
          This is a 4DFrame Tubes and Connector counter application, connected with cloud CV.
          <br><br>
          We have problem when tidying up the 4DFrames after a class or event. Its too many.<br>
          Like when we have to pack 20 kits with 10 packs of connectors and 5 packs of tubes, and like 40 or 65 pcs per pack.
          So I trying to make this app to make our work easier with computer vision to count the tubes and connectors.
        </p>
      </template>
    </ProjectCard>
  </div>
</template>
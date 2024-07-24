<template>
  <div class="container py-8">
    <div class="flex flex-row justify-between items-center mb-8">
      <h1 class="text-4xl font-bold">Options Spotify Jam</h1>
      <Button @click="toggleDarkMode">Toggle Dark Mode</Button>
    </div>

    <div class="my-8">
      <Card>
        <CardHeader>
          <CardTitle>Now Playing</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex flex-row items-center">
            <img :src="currentSong.cover" alt="Album Cover" class="w-24 h-24 mr-4" />
            <div>
              <h2 class="text-2xl">{{ currentSong.name }}</h2>
              <p class="text-lg text-gray-600">{{ currentSong.album }}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button @click="playNext">Next Song</Button>
        </CardFooter>
      </Card>
    </div>

    <div class="my-8">
      <Card>
        <CardHeader>
          <CardTitle>Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(song, index) in queue" :key="index" class="flex flex-row items-center p-2 border border-gray-200 rounded-lg">
              <img :src="song.cover" alt="Album Cover" class="w-16 h-16 mr-4" />
              <div>
                <h3 class="text-xl">{{ song.name }}</h3>
                <p class="text-md text-gray-600">{{ song.album }}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function toggleDarkMode() {
  const root = document.querySelector(':root')
  root?.classList.toggle('dark')
}

function changeTheme(theme) {
  let root = document.querySelector(':root')

  const isDark = root?.classList.contains('dark')

  if (isDark) root?.classList.add('dark')
  root?.classList.add(theme)
}

// Dummy song data
const defaultSong = { name: 'Song Name', album: 'Album Name', cover: 'https://via.placeholder.com/150' }
const currentSong = ref(defaultSong)

const queue = ref([
  { name: 'Song 1', album: 'Album 1', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 2', album: 'Album 2', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 3', album: 'Album 3', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 4', album: 'Album 4', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 5', album: 'Album 5', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 6', album: 'Album 6', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 7', album: 'Album 7', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 8', album: 'Album 8', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 9', album: 'Album 9', cover: 'https://via.placeholder.com/150' },
])

const playNext = () => {
  if (queue.value.length > 0) {
    currentSong.value = queue.value.shift() || defaultSong
  }
}
</script>

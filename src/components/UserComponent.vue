<template>
  <div class="container py-8">
    <div class="flex flex-row justify-between items-center mb-8">
      <h1 class="text-4xl font-bold">Suggest a Song</h1>
      <Button @click="toggleDarkMode">Toggle Dark Mode</Button>
    </div>

    <div class="my-8">
      <Card>
        <CardHeader>
          <CardTitle>Suggest a New Song</CardTitle>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="suggestSong">
            <div class="mb-4">
              <label for="song-name" class="block text-sm font-medium text-gray-700">Song Name</label>
              <input v-model="newSong.name" type="text" id="song-name" class="mt-1 block w-full" />
            </div>
            <div class="mb-4">
              <label for="album-name" class="block text-sm font-medium text-gray-700">Album Name</label>
              <input v-model="newSong.album" type="text" id="album-name" class="mt-1 block w-full" />
            </div>
            <div class="mb-4">
              <label for="cover-url" class="block text-sm font-medium text-gray-700">Cover URL</label>
              <input v-model="newSong.cover" type="text" id="cover-url" class="mt-1 block w-full" />
            </div>
            <Button type="submit">Suggest Song</Button>
          </form>
        </CardContent>
      </Card>
    </div>

    <div class="my-8">
      <Card>
        <CardHeader>
          <CardTitle>Suggested Songs</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(song, index) in suggestedSongs" :key="index" class="flex flex-row items-center p-2 border border-gray-200 rounded-lg">
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
import { Input } from '@/components/ui/input'

function toggleDarkMode() {
  const root = document.querySelector(':root')
  root?.classList.toggle('dark')
}

// Suggested songs state
const suggestedSongs = ref([
  { name: 'Suggested Song 1', album: 'Suggested Album 1', cover: 'https://via.placeholder.com/150' },
  { name: 'Suggested Song 2', album: 'Suggested Album 2', cover: 'https://via.placeholder.com/150' }
])

// New song form state
const newSong = ref({ name: '', album: '', cover: '' })

const suggestSong = () => {
  if (newSong.value.name && newSong.value.album && newSong.value.cover) {
    suggestedSongs.value.push({ ...newSong.value })
    newSong.value = { name: '', album: '', cover: '' }
  }
}
</script>

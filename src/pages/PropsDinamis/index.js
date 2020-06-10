import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 50, height: 50, borderRadius: 25}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            gambar="https://instagram.fcgk8-2.fna.fbcdn.net/v/t51.12442-15/e35/c0.525.1080.1080a/s150x150/94900134_286831732332031_8802795890720135356_n.jpg?_nc_ht=instagram.fcgk8-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RFq289F0XwQAX9-mlqd&oh=318044b06778e06328b2f546248dd218&oe=5EE2B60E"
            judul="Youtube Channel"
          />
          <Story
            gambar="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/11203364_1387262291601952_222583245_a.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sxW14lBnyNMAX_dM5Ny&oh=58d346942dab02ff3457b52b0d7a2f2a&oe=5F08C357"
            judul="Kelas Online"
          />
          <Story
            gambar="https://instagram.fcgk8-2.fna.fbcdn.net/v/t51.12442-15/e35/c0.525.1080.1080a/s150x150/94900134_286831732332031_8802795890720135356_n.jpg?_nc_ht=instagram.fcgk8-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RFq289F0XwQAX9-mlqd&oh=318044b06778e06328b2f546248dd218&oe=5EE2B60E"
            judul="Game Edukasi"
          />
          <Story
            gambar="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/11203364_1387262291601952_222583245_a.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sxW14lBnyNMAX_dM5Ny&oh=58d346942dab02ff3457b52b0d7a2f2a&oe=5F08C357"
            judul="Mobile Legends"
          />
          <Story
            gambar="https://instagram.fcgk8-2.fna.fbcdn.net/v/t51.12442-15/e35/c0.525.1080.1080a/s150x150/94900134_286831732332031_8802795890720135356_n.jpg?_nc_ht=instagram.fcgk8-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RFq289F0XwQAX9-mlqd&oh=318044b06778e06328b2f546248dd218&oe=5EE2B60E"
            judul="Airinzia"
          />
          <Story
            gambar="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/11203364_1387262291601952_222583245_a.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sxW14lBnyNMAX_dM5Ny&oh=58d346942dab02ff3457b52b0d7a2f2a&oe=5F08C357"
            judul="Mobile Legends"
          />
          <Story
            gambar="https://instagram.fcgk8-2.fna.fbcdn.net/v/t51.12442-15/e35/c0.525.1080.1080a/s150x150/94900134_286831732332031_8802795890720135356_n.jpg?_nc_ht=instagram.fcgk8-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RFq289F0XwQAX9-mlqd&oh=318044b06778e06328b2f546248dd218&oe=5EE2B60E"
            judul="Airinzia"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});

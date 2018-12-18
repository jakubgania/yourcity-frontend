<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap>
    <v-flex xs12 lg12 style="background-color:#ffffff;">
      <div class="text-thin-big">
        Jakie podmioty mogą promować się w YOURCITY dla biznesu ?
      </div>
    </v-flex>
    <v-flex
      v-for="section in descriptions.advertise.section"
      :key="section.id"
      xs12 lg4
      class="card-component"
    >
      <div class="title-info-section">
        <i class="material-icons card-icon">{{ section.icon }}</i>
        {{ section.title }}
      </div>
      <div class="description-info-section">
        {{ section.description }}
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      descriptions: {
        advertise: {
          who_can_advertise_title: 'Jakie podmioty mogą promować się w YOURCITY dla biznesu ?',
          section: {
            commercial_network: {
              icon: 'share',
              title: 'Sieć handlowa',
              description: 'Posiadasz ogólnopolską lub międzynarodową sieć, w skład której wchodzą na przykład restauracje, sklepy odzieżowe, oddziały banku, stacje benzynowe, kantory itp.? Dzięki YOURCITY Twoja marka stanie się popularniejsza i bliższa twoim klientom !',
            },
            local_business: {
              icon: 'store_mall_directory',
              title: 'Lokalny biznes',
              description: 'Prowadzisz swój niewielki biznes? Może posidasz piekarnię, niewielki bar ze zdrową żywnością lub wypożyczalnie samochodów ? YOURCITY to również miesjce dla profilu Twojej działaności!',
            },
            service: {
              icon: 'settings',
              title: 'Usługa',
              description: 'Świadczysz szerokopojęte usługi? Może zajmujesz się krawiectwem albo prowadzisz salon kosmetyczny? Może Twoja firma zajmuje się dojazdem do klineta i oferuje naprawę samochodu/ komputera/ okna? Zarejsetruj się w YOURCITY i zyskaj większe grono usługobiorców!',
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.text-thin-big
{
  text-align: center;
  margin-top: 160px;
  margin-bottom: 160px;
  font-size: 40px;
  font-weight: 700;
}
.card-component
{
  background-color: #ffffff;
  padding-bottom: 140px;
  padding-left: 60px;
  padding-right: 60px;

  .card-icon
  {
    position: relative;
    top: 8px;
    margin-right: 15px;
    color: #252bfc;
    font-size: 40px;
  }

  .title-info-section
  {
    text-align: left;
    letter-spacing: 2px;
    font-size: 30px;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-left: 10px;
  }

  .description-info-section
  {
    font-size: 16px;
    color: #4f4f4f;
    text-align: left;
    letter-spacing: 1px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 80px;
  }
}
@media only screen and (max-width: 600px)
{
  .text-thin-big
  {
    margin-top: 80px;
    margin-bottom: 80px;
    font-size: 32px;
    font-weight: 700;
    padding-left: 20px;
    padding-right: 20px;
  }
  .card-component
  {
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;

    .card-icon
    {
      font-size: 32px;
    }

    .title-info-section
    {
      font-size: 26px;
    }

    .description-info-section
    {
      font-size: 14px;
      padding-bottom: 60px;
    }
  }
}
</style>

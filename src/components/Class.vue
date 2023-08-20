<template>
    <div id="carouselClass" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="theme, key, index in themes[classe]" :key="index" :class="['carousel-item', index ? '' : 'active']">
                <CardTheme :key_card="index" :image="theme['image']" :classe="classe + '_'" :titre="key"
                    :text_card_fiches="theme['thèmes fiche']" :text_card_ligne="theme['thèmes ligne']"
                    :class="accordion_class" :collapsed_prop="collapsed_prop" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselClass" data-bs-slide="prev"
            @click="accordion_class_modifier">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselClass" data-bs-slide="next"
            @click="accordion_class_modifier">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
import CardTheme from './CardTheme.vue'
import seconde from '../structures/seconde.js'
import premiere_spe from '../structures/premiere_spe.js'
import premiere_techno from '../structures/premiere_techno.js'
import terminale_spe from '../structures/terminale_spe.js'
import terminale_techno from '../structures/terminale_techno.js'

export default {
    name: 'Classe-module',
    components: { CardTheme },
    data() {
        return {
            accordion_class: "accordion-collapse collapse",
            recoller: 0,
            collapsed_prop: "collapsed"
        }
    },
    watch: {
    },
    methods: {
        accordion_class_modifier() {
            if (this.recoller % 2) {
                this.accordion_class = 'accordion-collapse collapse coller'
                this.collapsed_prop = 'collapsed coller'
            } else {
                this.accordion_class = 'accordion-collapse collapse recoller'
                this.collapsed_prop = 'collapsed recoller'
            }
            this.recoller = (this.recoller + 1) % 2
        }
    },
    props: {
        classe: {
            type: String,
            default: 'seconde'
        },
        themes: {
            default: {
                'seconde': seconde,
                'premiere_spe': premiere_spe,
                'premiere_techno': premiere_techno,
                'terminale_spe': terminale_spe,
                'terminale_techno': terminale_techno
            }
        }
    }
}
</script>

<style scoped>
#carouselClass {
    width: 25em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-color: rgba(3.2, 85.3, 133.7, 0.8) !important;
}

.carousel-control-next,
.carousel-control-prev {
    width: 15px;
}

@media screen and (max-width: 900px) {
    #carouselClass {
        width: 21.5em;
    }
}
</style>
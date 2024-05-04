
import { defineComponent } from 'vue';
import { type Card } from 'src/interfaces/card_interface';

const cardsConfigurationArray: Card[] = [
    {
        title: "Noruega",
        description: "Paisajes Increíbles",
        bg_image: "bg-norway",
        card_bg_color: "bg-secondary",
        card_dark_bg_color: "bg-gray-700",
        text_color: "text-white",
        text_dark_color: "",
      },
      {
        title: "New York",
        description: "La gran manzana",
        bg_image: "bg-new_york",
        card_bg_color: "bg-white",
        card_dark_bg_color: "bg-gray-800",
        text_color: "text-terciary",
        text_dark_color: "text-white",
      },
      {
        title: "Sidney",
        description: "Australia fascinante",
        bg_image: "bg-sydney bg-center",
        card_bg_color: "bg-secondary",
        card_dark_bg_color: "bg-gray-700",
        text_color: "text-white",
        text_dark_color: "",
      },
      {
        title: "Miami",
        description: "Ven y disfruta",
        bg_image: "bg-miami",
        card_bg_color: "bg-white",
        card_dark_bg_color: "bg-gray-800",
        text_color: "text-terciary",
        text_dark_color: "text-white",
      },
      {
        title: "Suiza",
        description: "Sus maravillas",
        bg_image: "bg-switzerland bg-center",
        card_bg_color: "bg-secondary",
        card_dark_bg_color: "bg-gray-700",
        text_color: "text-white",
        text_dark_color: "",
      },
      {
        title: "Bali",
        description: "Ven y disfruta",
        bg_image: "bg-bali",
        card_bg_color: "bg-white",
        card_dark_bg_color: "bg-gray-800",
        text_color: "text-terciary",
        text_dark_color: "text-white",
      },
      {
        title: "Chicago",
        description: "La ciudad soñada",
        bg_image: "bg-seattle bg-center",
        card_bg_color: "bg-secondary",
        card_dark_bg_color: "bg-gray-700",
        text_color: "text-white",
        text_dark_color: "",
      },
];

export const RecomendedCard = defineComponent({
    props: {
        title: { type: String },
        description: { type: String },
        card_bg_color: { type: String },
        card_dark_bg_color: { type: String },
        text_color: { type: String },
        text_dark_color: { type: String },
        bg_image: { type: String }
    },
    methods: {
      transformDarkClass(className: string): string {
        return `dark:${className}`;
      }
    },
    render() {
        return (
            <div class="card">
                <div class={`w-full h-3/5 rounded-t-lg ${this.bg_image ? this.bg_image : ''} bg-cover`}></div>
                <div class={`w-full h-2/5 ${this.card_bg_color ? this.card_bg_color : ''} rounded-b-lg ${this.card_dark_bg_color ? this.transformDarkClass(this.card_dark_bg_color) : ''}`}>
                  <p class={`${this.text_color ? this.text_color : ''} ${this.text_dark_color ? this.transformDarkClass(this.text_dark_color) : ''} text-bold text-xl px-4 py-2`}>{this.title}</p>
                  <p class={`${this.text_color ? this.text_color : ''} ${this.text_dark_color ? this.transformDarkClass(this.text_dark_color) : ''} text-md px-4`}>{this.description}</p>
                </div>
            </div>
        )
    }
}) 
export const RenderList = defineComponent({ 
    components: {
        RecomendedCard
    },
    data() {
        return {
            cardsConfigurationArray: cardsConfigurationArray
        }
    },
    render() { return <>
            {this.cardsConfigurationArray.map((item) => { 
                return <RecomendedCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    bg_image={item.bg_image}
                    card_bg_color={item.card_bg_color}
                    card_dark_bg_color={item.card_dark_bg_color}
                    text_color={item.text_color}
                    text_dark_color={item.text_dark_color}
                ></RecomendedCard>         
            })}
        </> 
    }
});

export class test {
  renderComponent() {
    return <RenderList />
  }
}
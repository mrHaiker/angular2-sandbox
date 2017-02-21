import {InMemoryDbService} from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phones = {
      "samsung": [
        {
          "images": [
            "//cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s5-g900f-1.jpg"
          ],
          "name": "Galaxy S5",
          "description": "\"Экран (5.1\", Super AMOLED, 1920x1080) / Samsung Exynos 5422 (Quad 1.9 ГГц + Quad 1.3 ГГц) / основная камера: 16 Мп, фронтальная камера: 2 Мп / RAM 2 ГБ / 16 ГБ встроенной памяти + microSD/SDHC (до 128 ГБ) / 3G / GPS / Micro-SIM / Android 4.4.2 (KitKat) / 2800 мА*ч",
          "price": 349.99
        },
        {
          "images": [
            "//www.samsung.com/uk/galaxys6/images/colours/galaxys6_black_v3.jpg"
          ],
          "name": "Galaxy S6",
          "description": "\"Экран (5.1\", Super AMOLED, 2560х1440)/ Samsung Exynos 7420 (Quad 2.1 ГГц + Quad 1.5 ГГц)/ основная камера: 16 Мп, фронтальная камера: 5 Мп/ RAM 3 ГБ/ 32 ГБ встроенной памяти/ 3G/ LTE/ GPS/ Nano-SIM/ Android 5.0 (Lollipop) / 2550 мА*ч",
          "price": 499.99
        },
        {
          "images": [
            "//itblog.net.ua/wp-content/uploads/2016/11/galaxy-s7-unlocked-us.jpg"
          ],
          "name": "Galaxy S7",
          "description": "\"Экран (5.1\", Super AMOLED, 2560х1440)/ Exynos 8890 Octa (Quad 2.3 ГГц + Quad 1.6 ГГц)/ камера 12 Мп + фронтальная 5 Мп/ RAM 4 ГБ/ 32 ГБ встроенной памяти + microSD (до 200 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 6.0 (Marshmallow) / 3000 мА*ч",
          "price": 520.00
        }
      ],
      "apple": [],
      "meizu": [],
      "lg": [],
      "xiomi": [],
      "nokia": []
    };
    return { phones }
  }
}

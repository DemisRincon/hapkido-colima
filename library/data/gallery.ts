import Grid from "@/components/organism/Grid";
import { DataStructure } from "./types";

export const galleryData: DataStructure[] = [
  {
    type: Grid,
    title: "Galería",
    columns: "1fr 1fr 1fr",
    photoheight: "300px",
    photowidth: "400px",
    images: [
      "https://scontent.fclq2-1.fna.fbcdn.net/v/t1.6435-9/102918193_1942369252561565_7413658918455422188_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFZcN1BbWIya6Z8GP5_NbVNlXDEoVWgnIqVcMShVaCcisXrukO5n0wb3w0gwaJxr0BoqWjBx45IFrj_Mt4wROKK&_nc_ohc=8EZzaTM2bvgQ7kNvgGK0S2i&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=AvRUK-qrqWMT-gNnI-iohEB&oh=00_AYBLy0ZQPjnU9RFtyB5PSIYJlOPM4ZdyNX5y-eusO7--Sg&oe=67B6E72D",
      "https://scontent.fclq2-1.fna.fbcdn.net/v/t1.6435-9/102712628_1942369225894901_437654954146152221_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7B9Mk-mc23EwDk-OBvlZxiB2OXLoT-mOIHY5cuhP6Y58RT9tP7b1XBZRHmrNLkCPdRksbbpxDSY4OxnMn9X74&_nc_ohc=W77Yy1_yvSsQ7kNvgEIQFrg&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=A41gTFONlAtuxXmrkTsdWKe&oh=00_AYDCkf1BZqd_G3hnNMYLKtFA-AtnuIhWh6OKR-BTDUrmWw&oe=67B6D5E2",
      "https://scontent.fclq2-1.fna.fbcdn.net/v/t1.6435-9/102755173_1942369135894910_1567001788624902252_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEcuCXdaqknwGV-zYkXmBTw7lZ8rcEJhqLuVnytwQmGopKtjC3wiQ5wHHXjMMmqgGUsCwVEKwWANjmWuiTzQuY9&_nc_ohc=lRZBgXz3TAEQ7kNvgFzDjxR&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=A35xc1Rb7SRAM-qs100hGxr&oh=00_AYDAU1hB-jQU806k72csbFrPT2VMDe9MeiQgDFloojHOGg&oe=67B6DBB1",
      "https://scontent.fclq2-1.fna.fbcdn.net/v/t1.6435-9/102728196_1942369195894904_4313101782067942879_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHD3MY15E7ZWMwGrnF5afVU1OV8itNlHa_U5XyK02Udr_QxunBN01ZCecvGK8kjdQH-C2Qo7h2UaBEbOSSpmo9a&_nc_ohc=TkBP-bvwifYQ7kNvgHhZCmV&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=A3yILk77xPq_wyugoTOv__n&oh=00_AYDfB3qCm406XuVjyaLANCWti0VaFues9remk2GZlNXNzg&oe=67B6CF5A",
      "https://scontent.fclq2-1.fna.fbcdn.net/v/t1.6435-9/53814273_1523290211136140_6156464267353653248_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGc95NRfOEYK48sQtwblIotP9eNnEhTTzg_142cSFNPOAfd6cFmXwJqu-QEyFhAPenSZYfYIMmazg8xQy5sDCV4&_nc_ohc=yq4I1qBJ24UQ7kNvgHtbhrf&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=A4cb-dU7emhDW8-mEnC0gXq&oh=00_AYBF4zHb0jHMA3D4kTS-s-TfsxoQK8TMm8bMYuLXjYIlzA&oe=67B6C214",
      "https://scontent.fclq2-1.fna.fbcdn.net/v/t1.6435-9/54515211_1523290164469478_1590798681768984576_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH4yAgNLRZAUR8bpkuNj1xgMGyO3bKWBNwwbI7dspYE3EEp-68rK-rX7fV5CSh09beHScGKvEaxg_pZq4lMvBp8&_nc_ohc=lFr-3IMXj3EQ7kNvgE1pDsm&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=A7tM__6wLGJPUmPaTopA4Ah&oh=00_AYDBp6pXY2SL1kLMJvB6vkMPtGqt3s-6He-XM9sPrvxPzA&oe=67B6CF30",
      "https://scontent.fclq2-1.fna.fbcdn.net/v/t1.6435-9/54379026_1523290141136147_5812565308249997312_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHgP9__gQvpRwbZ6B8bMxV1kF9cfhC4oDGQX1x-ELigMU8BK-99by7qAThPjYONTS8oR8lEm8B87TkNPOEAkX9k&_nc_ohc=agO8CMMhMUgQ7kNvgFKdKRr&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=AUY_DixgChQuuoNCduDXWZ5&oh=00_AYD7wFpV9R3Pwbvsea2AKtgGPPoMyVXjFq6w0W1F1GVG0g&oe=67B6D12E",
      "https://scontent.fclq2-1.fna.fbcdn.net/v/t1.6435-9/54516229_1523289994469495_8152968789718204416_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEwjOK56cC5_EI_zeAySpqIstbjhyUOKdmy1uOHJQ4p2TFqnbo1D9kNbiYAetLPwmBNU28YgVHfU1xAOeQ0ZYmr&_nc_ohc=-Db1ukhsUEMQ7kNvgHhdpuZ&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=Adz7oUrdc5pWq3BsQedYsBK&oh=00_AYDxL8bMvwE6fOXBtTGkoAfkrJIY8WPYCQdsm1s4tctPDA&oe=67B6BD1E",
    ],
  },
];

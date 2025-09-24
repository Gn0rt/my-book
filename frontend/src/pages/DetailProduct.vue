<script setup>
import BgDetail from "@/assets/images/bgdetail.png";
import ProductImg from "@/assets/images/product1.png"
</script>
<template>
    <div>
        <img :src="BgDetail" alt="">
    </div>

    <div class="grid grid-cols-12 px-5">
        <div class="col-span-8 bg-[#F5F6F8]">
            <div class="flex items-center ">
                <div>
                    <img :src="ProductImg" alt="" class="h-[500px]">
                </div>
                <div class="mt-10">
                    <h2 class="text-6xl my-2">Garis Waktu</h2>
                    <div>
                        <span>By Author</span>
                        <span>1 Juli 2016</span>
                    </div>
                    <p class="my-2">Rating</p>
                    <div class="mt-[100px]">
                        <button class="bg-[#FF971D] text-white py-1 px-10 rounded-md">Mua ngay</button>
                        <button class="text-[#FF971D] border-[1px] border-[#FF971D] rounded-md py-1 px-10 ml-5">Them <font-awesome-icon :icon="['fa', 'cart-shopping']" /></button>
                    </div>
                </div>
            </div>

            <div>
                <h3>
                   Sinopsis
                </h3>
                <p>
                     Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Sed, laboriosam obcaecati tempora impedit
                      delectus, natus voluptatibus alias in dignissimos expedita 
                      aspernatur et. Illum atque asperiores temporibus assumenda 
                      earum sit praesentium impedit facilis ab at, maiores beatae 
                      dolore perspiciatis dignissimos corrupti magni blanditiis iste 
                      iure veritatis deleniti ipsum aliquam optio quis recusandae! 
                      Fugit maxime consequuntur non optio illum beatae voluptates 
                      earum repellendus nulla error. Illo ut quaerat placeat sequi 
                      dolor eius eligendi, expedita sint sapiente aliquam autem temporibus 
                      tempora architecto qui repellat facilis quia laboriosam maiores quo 
                      laudantium. Inventore, quasi, labore ipsam sed, laboriosam dicta 
                      dolorum delectus illum amet accusantium voluptates.
                </p>
            </div>
        </div>
        <div class="col-span-4">

        </div>

    </div>

</template>
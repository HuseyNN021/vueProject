<script setup></script>

<template>
  <section class="flex flex-col justify-center items-center bg-indigo-900 gap-4 rounded-t-2xl   ">
    <div class="flex flex-col text-white  lg:flex-row md:flex-row  justify-around items-center gap-16 max-w-6xl w-full">

        <div>
            <ul>
                <li>Konfidensiallıq siyasəti</li>
                <li>Şərtlər və qaydalar</li>
                <li>Şikayət və təkliflər</li>
                <li>Mütəmadi verilən suallar</li>
            </ul>
        </div>
        <div class="flex flex-col justify-center items-center">
            <h6>Bizə abunə olun:</h6>
            <form class="flex w-[20rem] items-center">
                <input type="text">
                <button   class="box-border w-[20rem] flex flex-row justify-center items-center px-5 py-2 bg-white border-2 border-white rounded-md font-montserrat font-bold text-[16px] leading-[150%] text-[#666666] cursor-pointer transition ease-in duration-200"
>Abunə olmaq</button>
            </form>
            <p>© 2024 HMC Company. Bütün hüquqlar qorunur.</p>
        </div>

    </div>
  </section>
</template>

<style scoped>
section{
  padding: 1rem;
}
  input{
    width: 100%;                    
    max-width: 16rem;               
    border: 1px solid #d1d5db;      
    border-radius: 0.375rem;         
    padding: 0.5rem 0.75rem;         
    font-size: 0.875rem;             
    transition: all 0.2s ease-in-out;
  }

  input:focus {
    outline: none;                   
    border-color: #3b82f6;         
    box-shadow: 0 0 0 2px #3b82f6;   
  }
  button{
    border-radius: 0.375rem;         
    padding: 0.5rem 0.75rem;  
  }

</style>
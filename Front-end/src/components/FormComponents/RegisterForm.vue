<script setup>
import BaseInput from '@/components/WebRelated/BaseInput.vue';
import FormCard from '@/Pages/FormLayout.vue/FormCard.vue';
import ButtonPrimary from '@/components/WebRelated/ButtonPrimary.vue';


</script>
<template>
  <FormCard>
    <form action="">

        
<div>

<BaseInput label="Enter your Name " type="text" />
</div>
      
<div class="mt-6 w-full">

<BaseInput label="Enter your E-mail" type="email" />
</div>      
<div class="mt-6 w-full">

<BaseInput label="Enter your password" type="password" />
</div>
<div class="mt-6 w-full">
<BaseInput label="Confirom-Password" type="password" class="rounded-lg"/>
 
</div>
<div class="mt-8">
 <ButtonPrimary text="Register"/>
</div>

</form>
  </FormCard>

   
</template>
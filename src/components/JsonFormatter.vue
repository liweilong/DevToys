<script setup lang="ts">
import { ref } from "vue";

const orginText = ref("");
let jsonData = ref(new Object);

</script>
    
<template>
    <n-grid cols="2" >
        <n-gi>
            <n-input :value="originText" type="textarea" style="height:35rem" placeholder="请输入Json数据..."/>
        </n-gi>
        <n-gi>
            <json-viewer :value="jsonData" copyable style=""/>
        </n-gi> 
    </n-grid>
</template>
     
<template>
    <div>
        {{title}}
    </div>
</template>
<script>
export default {
    name:'title',
    props:{
        // title:String
    },
    setup(props,context) {
        // console.log('common title props',props,context);
        let {title} = props
        // console.log('title',title);
        return title
    }
}
</script>
<style >
    div {
        font-size: 18px;
    }
</style>
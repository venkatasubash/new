<template>
  <div>
    <div v-for="edge in $page.allPost.edges" :key="edge.node.title">{{ edge.node.title }}</div>
  </div>
</template>

<page-query>
query Posts{
  allPost{
    totalCount
    pageInfo{
      totalPages
    }
    edges{
      node{
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

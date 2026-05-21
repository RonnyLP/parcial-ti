import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActorsView from '../views/ActorsView.vue'
import AnalysisView from '../views/AnalysisView.vue'
import ProblemTreeView from '../views/ProblemTreeView.vue'
import ObjectiveTreeView from '../views/ObjectiveTreeView.vue'
import PrototypeView from '../views/PrototypeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/actors', name: 'actors', component: ActorsView },
  { path: '/analysis', name: 'analysis', component: AnalysisView },
  { path: '/problem-tree', name: 'problem-tree', component: ProblemTreeView },
  { path: '/objective-tree', name: 'objective-tree', component: ObjectiveTreeView },
  { path: '/prototype', name: 'prototype', component: PrototypeView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
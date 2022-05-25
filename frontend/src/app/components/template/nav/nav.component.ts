import { Component, OnInit }                       from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl }                         from '@angular/cdk/tree';
import { Router }                                  from '@angular/router';
import { NavService }                              from './nav.service';



interface FoodNode {
  name     : string;
  icon     : string;
  link     : string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Início',
    icon: 'home',
    link: 'home'
  },{
    name: 'Treinamentos',
    icon: 'pending_actions',
    link: 'home/treinamento'
  },{
    name: 'FAQ',
    icon: 'question_answer',
    link: 'home/faq',
    children: [{name: 'Dúvidas Frequentes',icon:'folder',link: 'home/duvidas'},
               {name: 'Base Conhecimento' ,icon:'',link: 'home/base'}],
  },{
    name: 'Criação Conteúdo',
    icon: 'library_add',
    link: '',
    children: [{name: 'Documentação',icon:'',link: 'home/documentacoes'},
              {name: 'Vídeos'       ,icon:'',link: 'home/videos'}],
  },{
    name: 'Configurador',
    icon: 'settings',
    link: '',
    children: [{name: 'Usuários',icon:'' ,link: 'home/cusuarios'},
               {name: 'Acessos' ,icon:'' ,link: 'home/cacessos'},
               {name: 'Módulos' ,icon:'' ,link: 'home/cmodulos'},
               {name: 'FAQ'     ,icon:'' ,link: 'home/cfaq'}],
  },{
    name: 'Suporte',
    icon: 'contact_support',
    link: 'home/suporte'
  }

];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  icon: string;
  link: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      link: node.link,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router : Router, private navService: NavService) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

  get title(): string {
    return this.navService.navData.title
  }

}


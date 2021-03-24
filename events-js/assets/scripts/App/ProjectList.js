import { ProjectItem as PrjItem } from './ProjectItem.js';
import * as DomHelper from '../Utility/DomHelper.js';


export class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new PrjItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
    this.connectDroppable();
  }

  connectDroppable() {
    console.log(window.DEFAULT_VALUE);

    const lists = document.querySelector(`#${this.type}-projects ul`);

    lists.addEventListener('dragenter', (event) => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
        lists.parentElement.classList.add('droppable');
      }
    });

    lists.addEventListener('dragover', (event) => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
      }
    });

    lists.addEventListener('dragleave', (event) => {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== lists) {
        lists.parentElement.classList.remove('droppable');
      }
    });

    lists.addEventListener('drop', (event) => {
      const prjId = event.dataTransfer.getData('text/plain');
      if (this.projects.find((p) => p.id === prjId)) {
        return;
      }
      document
        .getElementById(prjId)
        .querySelector('button:last-of-type')
        .click();
      lists.parentElement.classList.remove('droppable');

      event.preventDefault();
    });
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DomHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

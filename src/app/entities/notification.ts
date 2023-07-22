import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

//Interface para modelo de notificação
export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  //conjunto de propriedades que é definida com a interface declarada acima
  private props: NotificationProps;
  private _id: string;
  //constructor que recebe todas as propriedades com base na interface e altera a definição da propriedade createdAt, dizendo que a mesma pode não ser declarada
  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    /*propriedade que atribui ao constructor as propriedades da interface, junto da propriedade da assinatura dele,
     além de definir a condição de que caso não seja declarado o createdAt, ele chamará a função de criar nova data */
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  //getters and setters definidos com base nas propriedades

  public get id() {
    return this._id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}

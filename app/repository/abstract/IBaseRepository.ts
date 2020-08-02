import { Model } from 'sequelize-typescript';
type PowerPartial<T> = {
    [U in keyof T]?: T[U] extends object
    ? PowerPartial<T[U]>
    : T[U] | Array<any> | object
};

export default interface IBaseRepository<T extends Model<T>> {
    create(model: T): Promise<T>;
   // bulkCreate(arg: T[], options?: { returning: boolean | string[], fields: string[] }): Promise<T[]>;
    // update(model: PowerPartial<T>, arg: { where: PowerPartial<T> }): number;
    // delete(arg: { where: PowerPartial<T> }): number;
    // count(arg: { where?: PowerPartial<T> }): number;
    // findByPk(pk: number): T;
    // findOrCreate(arg: { where?: PowerPartial<T>, defaults?: PowerPartial<T> }): [T, boolean];
    // findAll(arg?: { where?: PowerPartial<T>, limit?: number, offset?: number, order?: string | Array<Array<string>>, group?: string | Array<string>, raw?: boolean }): T[];
    // findAndCountAll(arg?: { where?: PowerPartial<T>, limit?: number, offset?: number, order?: string | Array<Array<string>>, group?: string | Array<string>, raw?: boolean }): { count: number, rows: T[] };

    //   public async index() {
    //     const ctx = this.ctx;
    //     const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    //     ctx.body = await ctx.model.User.findAll(query);
    //   }

    //   // 展示用户详情
    //   async show() {
    //     const ctx = this.ctx;
    //     ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
    //   }

    //   // 创建用户
    //   async create() {
    //     const ctx = this.ctx;
    //     const { name, age } = ctx.request.body;
    //     const user = await ctx.model.User.create({ name, age });
    //     ctx.status = 201;
    //     ctx.body = user;
    //   }

    //   // 更新用户
    //   async update() {
    //     const ctx = this.ctx;
    //     const id = toInt(ctx.params.id);
    //     const user = await ctx.model.User.findByPk(id);
    //     if (!user) {
    //       ctx.status = 404;
    //       return;
    //     }

    //     const { name, age } = ctx.request.body;
    //     await user.update({ name, age });
    //     ctx.body = user;
    //   }

    //   // 删除用户
    //   async destroy() {
    //     const ctx = this.ctx;
    //     const id = toInt(ctx.params.id);
    //     const user = await ctx.model.User.findByPk(id);
    //     if (!user) {
    //       ctx.status = 404;
    //       return;
    //     }

    //     await user.destroy();
    //     ctx.status = 200;
    //   }
}

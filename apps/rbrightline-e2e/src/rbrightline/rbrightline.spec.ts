import axios from 'axios';
describe('Sample Module', () => {
  let saved: any;

  beforeAll(async () => {
    const res = await axios.post(`/api/sample`, { name: 'sample' });
    saved = res.data;
    expect(res.status).toBe(201);
    expect(res.data.name).toEqual('sample');
  });

  it('GET /api/samples', async () => {
    const res = await axios.get(`/api/samples`);
    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThanOrEqual(1);
  });

  it('GET /api/sample/:id', async () => {
    const res = await axios.get(`/api/sample/${saved.id}`);
    expect(res.status).toBe(200);
    expect(res.data.name).toEqual('sample');
  });

  it('PUT /api/sample/:id', async () => {
    const res = await axios.put(`/api/sample/${saved.id}`, { number: 1 });
    expect(res.status).toBe(200);
    const found = await axios.get(`/api/sample/${saved.id}`);
    expect(found.data.number).toEqual(1);
  });

  afterAll(async () => {
    const res = await axios.delete(`/api/sample/${saved.id}`);
    expect(res.status).toBe(200);
    expect(res.data.affected).toEqual(1);
  });
});

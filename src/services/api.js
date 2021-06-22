const baseUrl = 'https://reqres.in/';

export class API_SERVICE {
    static async getResourceListAsync() {
        try {
            const response = await fetch(baseUrl + `api/unknown`);

            const result = await response.json();

            return result.data;
        } catch (error) {
            console.trace(error);
        }
    }

    static async getUserListAsync(limit = 12) {
        try {
            const response = await fetch(
                baseUrl + `api/users?page=1&per_page=${limit}`
            );

            const result = await response.json();
            return result.data;
        } catch (error) {
            console.trace(error);
        }
    }
}

export default API_SERVICE;

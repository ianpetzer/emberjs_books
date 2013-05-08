module RestfulController 

  def restful_entity_name
    self.class.name.gsub('Controller', '').singularize
  end

  def restful_entity_class
    restful_entity_name.constantize
  end

  def restful_entity_params
    params[restful_entity_name.underscore.to_sym]
  end

  def index
    render json: restful_entity_class.all
  end

  def show
    render json: restful_entity_class.find(params[:id])
  end

  def destroy
    restful_entity = restful_entity_class.find(params[:id])
    restful_entity.destroy
    render status: 200, text: ''
  end
  
  def update
    restful_entity = restful_entity_class.find(params[:id])
    logger.info(restful_entity.id)
    restful_entity.update_attributes(restful_entity_params)
    logger.info restful_entity_name.to_sym
    logger.info params[restful_entity_name.to_sym]


    render json: restful_entity
  end

  def create
    restful_entity = restful_entity_class.new(restful_entity_params)
    restful_entity.save
    render json: restful_entity
  end

end